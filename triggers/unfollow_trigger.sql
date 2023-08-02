DELIMITER $$

CREATE TRIGGER capture_unfollow
     AFTER DELETE ON follows FOR EACH ROW
     BEGIN
          INSERT into unfollows
          set 
          follower_id = old.follower_id,
          followee_id = old.followee_id;
     END;
$$

DELIMITER ;